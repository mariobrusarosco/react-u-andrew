## Browser Router

It's the component that handles the 'routing'

## Router

It's the component that looks for a specific route and renders
a component in case of a match

```jsx
const ExpenseDashboardPage = () => <div>Dashboard</div>;
const AddExpensePage = () => <div>Add Expense</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
    </div>
  </BrowserRouter>
);
```

At this point, if I acess `/create` nothing will appear. To fix
this I need to set a prop in my 'webpack':

```js
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  }
```

But now, acessing `/create` will show both components. The reason
is that `/create` constains `/` and `create`. Matching both components.
The `exact` makes the router only match "/" if the url is exaclty "/".
If anything comes after the '/' is not a exact match!!

```jsx
const ExpenseDashboardPage = () => <div>Dashboard</div>;
const AddExpensePage = () => <div>Add Expense</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
    </div>
  </BrowserRouter>
);
```
