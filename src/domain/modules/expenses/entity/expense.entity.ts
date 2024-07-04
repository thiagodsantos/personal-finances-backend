import { Account } from '@domain/modules/account/entity/account.entity';
import { Category } from '@domain/modules/category/entity/category.entity';
import { Date } from '@domain/value-objects/date.value-object';
import { Flag } from '@domain/value-objects/flag.value-object';
import { Id } from '@domain/value-objects/id.value-object';
import { Money } from '@domain/value-objects/money.value-object';
import { Numeric } from '@domain/value-objects/numeric.value-object';
import { Text } from '@domain/value-objects/text.value-object';

export enum ExpenseFrequency {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export class ExpenseProps {
  account: Account;
  amount: Money;
  category: Category;
  date: Date;
  description: Text;
  id: Id;
  paid: Flag;
  repeat: Flag;
  repeatTimes: Numeric;
  repeatTimesFrequency: ExpenseFrequency;
}

export class Expense {
  private readonly account: Account;
  private readonly amount: Money;
  private readonly category: Category;
  private readonly date: Date;
  private readonly description: Text;
  private readonly id: Id;
  private readonly paid: Flag;
  private readonly repeat: Flag;
  private readonly repeatTimes: Numeric;
  private readonly repeatTimesFrequency: ExpenseFrequency;

  private constructor(expense: ExpenseProps) {
    Object.assign(this, expense);
  }

  static create(expense: ExpenseProps): Expense {
    const account = Account.create({
      id: expense.account.getId(),
      name: expense.account.getName(),
      type: expense.account.getType(),
    });

    const category = Category.create({
      id: expense.category.getId(),
      name: expense.category.getName(),
      description: expense.category.getDescription(),
      subCategories: expense.category.getSubCategories(),
    });

    return new Expense({
      ...expense,
      account,
      category,
    });
  }

  getAccount(): Account {
    return this.account;
  }

  getAmount(): Money {
    return this.amount;
  }

  getCategory(): Category {
    return this.category;
  }

  getDate(): Date {
    return this.date;
  }

  getDescription(): Text {
    return this.description;
  }

  getId(): Id {
    return this.id;
  }

  getPaid(): Flag {
    return this.paid;
  }

  getRepeat(): Flag {
    return this.repeat;
  }

  getRepeatTimes(): Numeric {
    return this.repeatTimes;
  }

  getRepeatTimesFrequency(): ExpenseFrequency {
    return this.repeatTimesFrequency;
  }

  getTotals(expenses: Expense[]): Money {
    return Money.sum(expenses.map((expense) => expense.getAmount()));
  }
}
