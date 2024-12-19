import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const { name, description, price } = createProductDto;

    const newProduct = new Product(uuid(), name, description, price);
    this.products.push(newProduct);

    return newProduct;
  }

  findAll() {
    const products = this.products;

    return products;
  }

  findOne(id: string) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product with ${updateProductDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
