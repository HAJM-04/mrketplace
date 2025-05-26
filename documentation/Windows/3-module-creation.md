# Create App Modules

```sh
ng g module auth --routing
ng g module products --routing
ng g module sales --routing
ng g module shared
```

## Create components inner every module

### Authentication

```sh
ng g component auth/login
ng g component auth/register
```

### Products

```sh
ng g component products/product-list
ng g component products/product-form
```

### Sales

```sh
ng g component sales/cart
ng g component sales/sales-history
```

### Shared Resources

```sh
ng g component shared/navbar
```
