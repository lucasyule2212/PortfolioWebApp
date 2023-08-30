import { Input } from '@/components/ui/input';
import React, { useCallback, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useGuestUser } from '@/store/GuestUser';

const zodResolverSchema = z.object({
  name: z.string().min(3).max(20),
  username: z.string().min(3).max(20),
  email: z.string().email(),
});

const UserFormChildren: React.FC = () => {
  const { setEmail, setUsername, setName } = useGuestUser();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    resolver: zodResolver(zodResolverSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
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
  useEffect(() => {
    const haveAllFields = dirtyFields.name && dirtyFields.username && dirtyFields.email;
    if (haveAllFields || isValid) {
      handleSubmit(onSubmit)();
    }
  }, [dirtyFields.email, dirtyFields.name, dirtyFields.username, handleSubmit, isValid, onSubmit]);

  return (
    <form className="flex flex-col w-full h-full items-center justify-center gap-4">
      <div className="flex  w-[60%] items-center gap-6">
        <div className="flex flex-col  w-[70%] justify-start gap-2">
          <h1 className="text-xl font-bold text-discord-gray-0 shadow-md border-b-2 border-b-discord-green-1 w-fit">
            Nome
          </h1>
          <Input type="text" className="bg-discord-gray-2 text-lg text-primary" {...register('name')} />
          {errors.name && <p className="text-red-500 text-xs">{errors.name?.message as string}</p>}
        </div>
        <div className="bg-discord-gray-1 p-4 rounded-md shadow-lg">
          <div className="flex items-center justify-center w-24 h-24 bg-red-500 rounded-full">
            <span className="text-2xl text-discord-white">?</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[60%] justify-start gap-2">
        <h1 className="text-xl font-bold text-discord-gray-0 shadow-md border-b-2 border-b-discord-green-1 w-fit">
          Username
        </h1>
        <Input type="text" className="bg-discord-gray-2 text-lg text-primary" {...register('username')} />
        {errors.username && <p className="text-red-500 text-xs">{errors.username?.message as string}</p>}
      </div>
      <div className="flex flex-col w-[60%] justify-start gap-2">
        <h1 className="text-xl font-bold text-discord-gray-0 shadow-md border-b-2 border-b-discord-green-1 w-fit">
          E-mail
        </h1>
        <Input type="email" className="bg-discord-gray-2 text-lg text-primary" {...register('email')} />
        {errors.email && <p className="text-red-500 text-xs">{errors.email?.message as string}</p>}
      </div>
    </form>
  );
};

export default UserFormChildren;
