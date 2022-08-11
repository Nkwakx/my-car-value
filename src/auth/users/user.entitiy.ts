import { Report } from './../../reports/report.entity';
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate, OneToMany } from 'typeorm';
// import { Exclude } from 'class-transformer';

@Entity()
export class User {

     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     email: string;

     // @Exclude()
     @Column()
     password: string;

     @OneToMany(() => Report, (report) => report.user)
     reports: Report[]

     @AfterInsert()
     logInsert() {
          console.log('Inserted User with id', this.id)
     }

     @AfterUpdate()
     logUpdate() {
          console.log('Updated user with id', this.id)
     }

     @AfterRemove()
     logRemove() {
          console.log('Removed user with id', this.id)
     }
}
