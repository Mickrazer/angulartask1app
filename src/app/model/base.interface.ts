import {FooterInterface} from './footer.interface'

export interface BaseInterface {

  id: number;
  subcategory: string;
  setup: string;
  date: string;
  description: string;
  status: FooterInterface;
  quantity: number;

}
