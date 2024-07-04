import { Account } from '@domain/modules/account/entity/account.entity';
import { Category } from '@domain/modules/category/entity/category.entity';
import { Date } from '@domain/value-objects/date.value-object';
import { Flag } from '@domain/value-objects/flag.value-object';
import { Id } from '@domain/value-objects/id.value-object';
import { Money } from '@domain/value-objects/money.value-object';
import { Numeric } from '@domain/value-objects/numeric.value-object';
import { Text } from '@domain/value-objects/text.value-object';

export enum RevenueFrequency {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export class RevenueProps {
  account: Account;
  amount: Money;
  category: Category;
  date: Date;
  description: Text;
  id: Id;
  received: Flag;
  repeat: Flag;
  repeatTimes: Numeric;
  repeatTimesFrequency: RevenueFrequency;
}

export class Revenue {
  private readonly account: Account;
  private readonly amount: Money;
  private readonly category: Category;
  private readonly date: Date;
  private readonly description: Text;
  private readonly id: Id;
  private readonly received: Flag;
  private readonly repeat: Flag;
  private readonly repeatTimes: Numeric;
  private readonly repeatTimesFrequency: RevenueFrequency;

  private constructor(expense: RevenueProps) {
    Object.assign(this, expense);
  }

  static create(expense: RevenueProps): Revenue {
    const account = Account.create({
      id: expense.account.getId(),
      name: expense.account.getName(),
      type: expense.account.getType(),
    });

    const category = Category.create({
      id: expense.category.getId(),
      name: expense.category.getName(),
      description: expense.category.getDescription(),
      subCategories: expense.category.getSubCategories()
    });

    return new Revenue({
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

  getReceived(): Flag {
    return this.received;
  }

  getRepeat(): Flag {
    return this.repeat;
  }

  getRepeatTimes(): Numeric {
    return this.repeatTimes;
  }

  getRepeatTimesFrequency(): RevenueFrequency {
    return this.repeatTimesFrequency;
  }

  getTotals(revenues: Revenue[]): Money {
    return Money.sum(revenues.map(revenues => revenues.getAmount()));
  }
}