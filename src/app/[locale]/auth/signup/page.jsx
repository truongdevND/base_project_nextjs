import React from 'react';
import { useTranslations } from 'next-intl';

const SignupPage = () => {
  const t = useTranslations('signup');

  return (
    <div>
      <h1>{t('title')}</h1>
      <form>
        <div>
          <label htmlFor="username">{t('username')}</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">{t('email')}</label>
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

export default SignupPage;
