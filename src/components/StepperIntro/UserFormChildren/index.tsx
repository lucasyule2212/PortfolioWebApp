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
    <form className="flex flex-col w-full h-full items-center">
      <h1 className="text-3xl font-bold text-discord-gray-0 mb-2">Deixe-me te conhecer melhor!</h1>
      <p className="text-xs font-semibold text-primary text-center mb-6">
        Antes de começarmos, preciso saber algumas coisas sobre você. <br /> Não se preocupe, é rapidinho!
      </p>
      <div className="flex flex-col w-[50%] gap-4">
        <div className=" flex-col justify-start gap-1">
          <h1 className="text-sm font-semibold text-discord-gray-0 shadow-md w-fit">
            NOME
            <span className="text-red-500 ml-1">*</span>
          </h1>
          <Input
            value={name}
            type="text"
            className="bg-discord-gray-2 text-sm text-primary h-8 "
            {...register('name')}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name?.message as string}</p>}
        </div>
        <div className="flex flex-col  justify-start gap-2">
          <h1 className="text-sm font-semibold text-discord-gray-0 shadow-md w-fit">
            USERNAME
            <span className="text-red-500 ml-1">*</span>
          </h1>
          <Input
            value={username}
            type="text"
            className="bg-discord-gray-2 text-primary h-8 text-sm"
            {...register('username')}
          />
          {errors.username && <p className="text-red-500 text-xs">{errors.username?.message as string}</p>}
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h1 className="text-sm font-semibold text-discord-gray-0 shadow-md w-fit">
            E-MAIL
            <span className="text-red-500 ml-1">*</span>
          </h1>
          <Input
            value={email}
            type="email"
            className="bg-discord-gray-2 text-primary h-8 text-sm"
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email?.message as string}</p>}
        </div>
      </div>
    </form>
  );
};

export default UserFormChildren;
