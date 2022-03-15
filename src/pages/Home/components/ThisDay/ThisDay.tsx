import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';

type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <h2 className={s.temperature}>20°</h2>
          <h2 className={s.tomorrow}>Сегодня</h2>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom_block}>
        <h2 className={s.time}>
          Время: <span>21:01</span>
        </h2>
        <h2 className={s.city}>Минск</h2>
      </div>
    </div>
  );
};

export default ThisDay;
