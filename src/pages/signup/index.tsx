import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo PizzaStation" />

        <div className={styles.login}>
          <h1>Criando sua conta</h1>

          <form>
            <Input type="text" placeholder="Digite seu nome" />
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link href="/">
            <a className={styles.text}>Já possui uma conta? Faça login!</a>
          </Link>
        </div>
      </div>
    </>
  );
}
