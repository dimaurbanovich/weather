import React, { useState } from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
  weather: Weather;
}

const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <h2 className={s.temperature}>{weather.main.temp}</h2>
          <h2 className={s.tomorrow}>Сегодня</h2>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom_block}>
        <h2 className={s.time}>
          Время: <span>21:01</span>
        </h2>
        <h2 className={s.city}>
          Город: <span>{weather.name}</span>
        </h2>
      </div>
    </div>
  );
};

export default ThisDay;
