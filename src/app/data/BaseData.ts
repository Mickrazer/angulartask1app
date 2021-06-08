import { BaseInterface } from '../model/base.interface';
import {footerData} from './FooterData';

export const baseData: BaseInterface[] = [

  {

    id: 145,
    subcategory: 'Подкатегория',
    setup: 'Установка',
    date: '01.04.2021 13:00',
    description: 'Краткое описание события',
    status: footerData[1],
    quantity: 10,
  },

  {

    id: 146,
    subcategory: 'Подкатегория',
    setup: 'Установка',
    date: '02.04.2021 11:00',
    description: 'Температура верха К-2.',
    status: footerData[4],
    quantity: 10,
  },
   {

    id: 147,
    subcategory: 'Подкатегория',
    setup: 'Установка',
    date: '05.04.2021 15:24',
    description: 'Температура верха К-2.',
    status: footerData[1],
    quantity: 7,
  },
  {

    id: 148,
    subcategory: 'Подкатегория',
    setup: 'Установка',
    date: '16.07.2020 13:00',
    description: 'Температура верха К-2.',
    status: footerData[2],
    quantity: 1,
  },
   {

    id: 149,
    subcategory: 'Подкатегория',
    setup: 'Установка',
    date: '05.03.2021 10:24',
    description: 'Температура верха К-2.',
    status: footerData[4],
    quantity: 8,
  }
];
