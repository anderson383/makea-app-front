import 'reflect-metadata';

import { TYPES } from './types';
import { Container } from 'inversify';
import { ProductsRepository } from '../repositories/products.repository';
import { ProductsRepositoryImpl } from '../repositories/products.repository.impl';

const repositoryContainer = new Container();

repositoryContainer.bind<ProductsRepository>(TYPES.PRODUCTS_REPOSITORY).to(ProductsRepositoryImpl);

export { repositoryContainer };
