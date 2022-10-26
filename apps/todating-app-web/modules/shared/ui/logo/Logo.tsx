import s from './logo.module.scss';

export const Logo: React.FunctionComponent = () => { 
  return (
    <div className={s.logo}>
      <span className={s.logo__meta}>Todating</span><span>App</span>
    </div>
    
  );

};
