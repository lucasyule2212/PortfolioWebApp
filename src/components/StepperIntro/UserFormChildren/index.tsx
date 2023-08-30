import { Input } from '@/components/ui/input';
import React, { useCallback, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useGuestUser } from '@/store/GuestUser';
import Avatar from 'boring-avatars';

const zodResolverSchema = z.object({
  name: z.string().min(3).max(20),
  username: z.string().min(3).max(20),
  email: z.string().email(),
});

const UserFormChildren: React.FC = () => {
  const { setEmail, setUsername, setName, guestUser } = useGuestUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: zodResolver(zodResolverSchema),
    defaultValues: {
      name: guestUser.name,
      username: guestUser.username,
      email: guestUser.email,
    },
  });

  const onSubmit = useCallback(
    (data: FieldValues) => {
      setEmail(data.email);
      setUsername(data.username);
      setName(data.name);
    },
    [setEmail, setName, setUsername]
  );

  const name = watch('name');
  const username = watch('username');
  const email = watch('email');

  useEffect(() => {
    const haveAllFields = name !== '' && username !== '' && email !== '';
    if (haveAllFields || isValid) {
      handleSubmit(onSubmit)();
    }
  }, [email, handleSubmit, isValid, name, onSubmit, username]);

  return (
    <form className="flex flex-col w-full h-full items-center justify-center gap-4">
      <div className="flex  w-[60%] items-center gap-6">
        <div className="flex flex-col  w-[70%] justify-start gap-2">
          <h1 className="text-xl font-bold text-discord-gray-0 shadow-md border-b-2 border-b-discord-green-1 w-fit">
            Nome
          </h1>
          <Input value={name} type="text" className="bg-discord-gray-2 text-lg text-primary" {...register('name')} />
          {errors.name && <p className="text-red-500 text-xs">{errors.name?.message as string}</p>}
        </div>
        <div className="bg-discord-gray-1 p-4 rounded-md shadow-lg">
          <div className="flex items-center justify-center w-28 h-28 rounded-full">
            <Avatar
              variant="beam"
              size="130px"
              name={name !== '' ? name : 'Discord'}
              colors={['#30182B', '#F0F1BC', '#60F0C0', '#FF360E', '#191F04']}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[60%] justify-start gap-2">
        <h1 className="text-xl font-bold text-discord-gray-0 shadow-md border-b-2 border-b-discord-green-1 w-fit">
          Username
        </h1>
        <Input
          value={username}
          type="text"
          className="bg-discord-gray-2 text-lg text-primary"
          {...register('username')}
        />
        {errors.username && <p className="text-red-500 text-xs">{errors.username?.message as string}</p>}
      </div>
      <div className="flex flex-col w-[60%] justify-start gap-2">
        <h1 className="text-xl font-bold text-discord-gray-0 shadow-md border-b-2 border-b-discord-green-1 w-fit">
          E-mail
        </h1>
        <Input value={email} type="email" className="bg-discord-gray-2 text-lg text-primary" {...register('email')} />
        {errors.email && <p className="text-red-500 text-xs">{errors.email?.message as string}</p>}
      </div>
    </form>
  );
};

export default UserFormChildren;
