import React from 'react';
import { useTranslations } from 'next-intl';

const LoginPage = () => {
  const t = useTranslations('login');

  return (
    <div>
      <h1>{t('title')}</h1>
      <form>
        <div>
          <label className='text-[100px]' htmlFor="email">{t('email')}</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">{t('password')}</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">{t('submit')}</button>
      </form>
    </div>
  );
};

export default LoginPage;
