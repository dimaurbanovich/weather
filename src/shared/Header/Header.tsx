import React from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import Select from 'react-select';

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Минск' },
    { value: 'city-2', label: 'Гродно' },
    { value: 'city-3', label: 'Брест ' },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: 0 ? '#fff' : '#000',
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <h1 className={s.title}>React weather</h1>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          styles={colourStyles}
          options={options}
          defaultValue={options[0]}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
