import { useContext, FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

import { AuthContext } from '../contexts/AuthContext';

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: 'email@teste.com',
      password: '1234',
    };

    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>PizzaStation - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo PizzaStation" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
          </Link>
        </div>
      </div>
    </>
  );
}
