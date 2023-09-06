import { Input } from '@/components/ui/input';
import React, { useCallback, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useGuestUser } from '@/store/GuestUser';
import { useTranslation } from 'react-i18next';
import { useAuthContext } from '@/contexts/AuthContext';

export const guestUserResolverSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[A-Za-z\sÀ-ÖØ-öø-ÿ]+$/u, {
      message: 'Name should only contain letters, spaces, and accents/diacritics.',
    })
    .refine(name => name.trim().split(/\s+/).length === 1, {
      message: 'Name should not contain consecutive spaces.',
    }),
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message: 'Username should only contain letters and numbers.',
    })
    .regex(/^\S*$/, {
      message: 'Username should not contain spaces.',
    })
    .refine(username => !['admin', 'root'].includes(username.toLowerCase()), {
      message: 'This username is reserved.',
    }),
  email: z.string().email(),
});

const UserFormChildren: React.FC = () => {
  const { t } = useTranslation();
  const { setEmail, setUsername, setName, guestUser } = useGuestUser();
  const { setGuestUserToLocalStorage } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: zodResolver(guestUserResolverSchema),
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
      setGuestUserToLocalStorage(guestUser);
    },
    [guestUser, setEmail, setGuestUserToLocalStorage, setName, setUsername]
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
      <h1 className="text-3xl font-bold text-discord-gray-0 mb-2">{t('greeting_1')}</h1>
      <p className="text-xs font-semibold text-primary text-center mb-6">{t('greeting_subtitle_1')} </p>
      <div className="flex flex-col w-[50%] gap-4">
        <div className=" flex-col justify-start gap-1">
          <h1 className="text-sm font-semibold text-discord-gray-0 shadow-md w-fit">
            {t('name').toUpperCase()}
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
