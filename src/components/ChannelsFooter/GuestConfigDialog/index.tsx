'use client';
import Spinner from '@/components/Spinner';
import { guestUserResolverSchema } from '@/components/StepperIntro/UserFormChildren';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useGuestUser } from '@/store/GuestUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useAnimation } from 'framer-motion';
import React, { useCallback, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { BsCheckLg, BsGearFill } from 'react-icons/bs';

// import { Container } from './styles';

const GuestConfigDialog: React.FC = () => {
  const { setEmail, setUsername, setName, guestUser } = useGuestUser();
  const controls = useAnimation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    watch,
    reset,
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
      return new Promise(resolve => {
        setTimeout(() => {
          setEmail(data.email);
          setUsername(data.username);
          setName(data.name);
          resolve(true);
        }, 2000);
      });
    },
    [setEmail, setName, setUsername]
  );

  const name = watch('name');
  const username = watch('username');
  const email = watch('email');

  useEffect(() => {
    if (isSubmitSuccessful) {
      controls.start({ opacity: 1, scale: 1 });
      setTimeout(() => {
        reset({
          name,
          username,
          email,
        });
      }, 3000);
    }
  }, [controls, email, isSubmitSuccessful, name, reset, username]);

  return (
    <Dialog>
      <DialogOverlay className="backdrop-blur-none bg-black/60" />
      <DialogTrigger className={`flex w-fit hover:bg-[#4e5058]/60  rounded-sm p-1`}>
        <BsGearFill size={18} className="text-discord-gray-0" />
      </DialogTrigger>
      <DialogContent className="bg-discord-gray-2 border border-discord-gray-5">
        <DialogHeader className="items-center gap-4">
          <DialogTitle className="text-primary">CONFIGURAÇÕES DE USUÁRIO</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col w-[100%] gap-6" onSubmit={handleSubmit(onSubmit)}>
              <div className=" flex-col justify-start gap-1">
                <h1 className="text-sm font-semibold text-discord-gray-0 shadow-md w-fit">
                  NOME
                  <span className="text-red-500 ml-1">*</span>
                </h1>
                <Input
                  value={name}
                  type="text"
                  className="bg-discord-gray-6 text-sm text-primary h-8 "
                  {...register('name')}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name?.message as string}</p>}
              </div>
              <div className="flex flex-col  justify-start gap-2">
                <h1 className="text-sm font-semibold text-discord-gray-0 w-fit">
                  USERNAME
                  <span className="text-red-500 ml-1">*</span>
                </h1>
                <Input
                  value={username}
                  type="text"
                  className="bg-discord-gray-6 text-primary h-8 text-sm"
                  {...register('username')}
                />
                {errors.username && <p className="text-red-500 text-xs">{errors.username?.message as string}</p>}
              </div>
              <div className="flex flex-col justify-start gap-2">
                <h1 className="text-sm font-semibold text-discord-gray-0 w-fit">
                  E-MAIL
                  <span className="text-red-500 ml-1">*</span>
                </h1>
                <Input
                  value={email}
                  type="email"
                  className="bg-discord-gray-6 text-primary h-8 text-sm"
                  {...register('email')}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email?.message as string}</p>}
              </div>
              <Button variant="default-discord" type="submit" value="submit">
                {!isSubmitting && !isSubmitSuccessful ? 'Salvar' : ''}
                {isSubmitting && !isSubmitSuccessful && <Spinner />}
                {isSubmitSuccessful && (
                  <motion.div
                    animate={controls}
                    initial={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-1"
                  >
                    <BsCheckLg size={25} className="text-discord-green" />
                  </motion.div>
                )}
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GuestConfigDialog;
