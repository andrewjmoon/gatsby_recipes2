import React from 'react'
import {Router} from '@reach/router'
import PrivateRoute from '../components/private-route'
import Login from '../components/login'
import Dashboard from "../components/dashboard"
import Layout from "../components/layout"
import ListReviews from '../components/users/list-reviews'
import RecipeUser from '../components/users/recipes/user-recipes'
import AnRecipeList2 from '../components/users/recipes/anrecipes2'
import UserRecipeList from '../components/users/recipes/user-recipes-list'
import UserSearch2 from '../components/users/recipes/user-search2'
import UserDashboard from '../components/users/user-dashboard'
import RecipeDashboard from '../components/users/recipes/recipe-dashboard'
import AddRecipes from '../components/users/recipes/add-recipes'
import UserSearch from '../components/users/recipes/user-search'
import RecipeList from '../components/users/recipes/recipes'
import RecipeList2 from '../components/users/recipes/recipes2'
import UpdateContent from '../components/users/recipes/update-content'
import UpdateTitle from '../components/users/recipes/update-title'
import PrivateRecipeDashboard from '../components/users/privaterecipes.js/privaterecipe-dashboard'
import AddPrivateRecipes from '../components/users/privaterecipes.js/add-privaterecipes'
import UserSearch3 from '../components/users/privaterecipes.js/user-search3'
import PrivateRecipeList from '../components/users/privaterecipes.js/privaterecipes'
import PrivateRecipeList2 from '../components/users/privaterecipes.js/privaterecipes2'
import UpdateContent2 from '../components/users/privaterecipes.js/update-content2'
import UpdateTitle2 from '../components/users/privaterecipes.js/update-title2'
import MealplanDashboard from '../components/users/mealplan/mealplan-dashboard'
import AddMealplan from '../components/users/mealplan/add-mealplan'
import UserSearch4 from '../components/users/mealplan/user-search4'
import MealplanList from '../components/users/mealplan/mealplanlist'
import MealplanList2 from '../components/users/mealplan/mealplanlist2'
import UpdateContent3 from '../components/users/mealplan/update-content3'
import UpdateTitle3 from '../components/users/mealplan/update-title3'
import GrocerylistDashboard from '../components/users/grocerylist/grocerylist-dashboard'
import AddLists from '../components/users/grocerylist/grocerylist'
import UserSearch5 from '../components/users/grocerylist/user-search5'
import UpdateContent4 from '../components/users/grocerylist/update-content'
import UpdateTitle4 from '../components/users/grocerylist/update-title4'
import Instructions from '../components/users/instructions'
//import MaDealsPosts from "../components/user/deal/madeals-posts"



const Dash = ()=> <h1>Dashboard Page</h1>

const Default = ()=> <h1>Default Page</h1>

const UserPage = () => {
    return (
<Layout>
    <Router >
    <Login path= "/user/login" />
    <Default path="/" />
    <ListReviews path="/user/list-reviews" />
    <RecipeUser path="/user/recipe-user" />
    <AnRecipeList2 path="/user/anrecipes/:id" />
    <UserRecipeList path="/user/recipe-users-lists/:id" />
    <UserSearch2 path="/user/user-search2" />
    <PrivateRoute path="/user/dashboard" component={Dashboard} />
    <PrivateRoute
        path="/user/authorized/user-dashboard"
        component={UserDashboard}
      />
      <PrivateRoute
        path="/user/authorized/recipe-dashboard"
        component={RecipeDashboard}
      />
      <PrivateRoute path="/user/authorized/recipe-add" component={AddRecipes} />
      <PrivateRoute
        path="/user/authorized/user-search"
        component={UserSearch}
      />
      <PrivateRoute
        path="/user/authorized/recipe-list"
        component={RecipeList}
      />
      <PrivateRoute
        path="/user/authorized/recipes/:id"
        component={RecipeList2}
      />
      <PrivateRoute
        path="/user/authorized/update-content"
        component={UpdateContent}
      />
      <PrivateRoute
        path="/user/authorized/update-title"
        component={UpdateTitle}
      />
      <PrivateRoute
        path="/user/authorized/privaterecipes-dashboard"
        component={PrivateRecipeDashboard}
      />
      <PrivateRoute
        path="/user/authorized/recipe2-add"
        component={AddPrivateRecipes}
      />
      <PrivateRoute
        path="/user/authorized/user-search3"
        component={UserSearch3}
      />
      <PrivateRoute
        path="/user/authorized/recipe2-list"
        component={PrivateRecipeList}
      />
      <PrivateRoute
        path="/user/authorized/privaterecipes/:id"
        component={PrivateRecipeList2}
      />
      <PrivateRoute
        path="/user/authorized/update-content2"
        component={UpdateContent2}
      />
      <PrivateRoute
        path="/user/authorized/update-title2"
        component={UpdateTitle2}
      />
      <PrivateRoute
        path="/user/authorized/mealplan-dashboard"
        component={MealplanDashboard}
      />
      <PrivateRoute
        path="/user/authorized/mealplan-add"
        component={AddMealplan}
      />
      <PrivateRoute
        path="/user/authorized/user-search4"
        component={UserSearch4}
      />
      <PrivateRoute
        path="/user/authorized/mealplan-list"
        component={MealplanList}
      />
      <PrivateRoute
        path="/user/authorized/mealplan/:id"
        component={MealplanList2}
      />
      <PrivateRoute
        path="/user/authorized/update-content3"
        component={UpdateContent3}
      />
      <PrivateRoute
        path="/user/authorized/update-title3"
        component={UpdateTitle3}
      />
      <PrivateRoute
        path="/user/authorized/grocerylist-dashboard"
        component={GrocerylistDashboard}
      />
      <PrivateRoute
        path="/user/authorized/grocerylist-add"
        component={AddLists}
      />
      <PrivateRoute
        path="/user/authorized/user-search5"
        component={UserSearch5}
      />
      <PrivateRoute
        path="/user/authorized/update-content4"
        component={UpdateContent4}
      />
      <PrivateRoute
        path="/user/authorized/update-title4"
        component={UpdateTitle4}
      />
      <PrivateRoute
        path="/user/authorized/instructions"
        component={Instructions}
      />
      <ListReviews path="/user/lists-reviews" component={ListReviews} />
      <Login path="/user/login" />
    </Router>
  </Layout>
    )
}

export default UserPage


/*
//import Subscription from "../components/subscription"
import UserDashboard from '../components/users/user-dashboard'
import RecipeDashboard from '../components/users/recipes/recipe-dashboard'
import AddRecipes from '../components/users/recipes/add-recipes'
import UpdateContent from '../components/users/recipes/update-content'
import UpdateContent2 from '../components/users/privaterecipes/update-content2'
import UpdateContent3 from '../components/users/mealplan/update-content3'
import UpdateContent4 from '../components/users/grocerylist/update-content4'
import UpdateTitle from '../components/users/recipes/update-title'
import UpdateTitle2 from '../components/users/privaterecipes/update-title2'
import UpdateTitle3 from '../components/users/mealplan/update-title3'
import RecipeList from '../components/users/recipes/recipes'

import RecipeUser from '../components/users/recipes/user-recipes'
import UserSearch2 from '../components/users/recipes/user-search2'
import UserSearch from '../components/users/recipes/user-search'
import PrivateRecipeDashboard from '../components/users/privaterecipes/privaterecipe-dashboard'
import AddPrivateRecipes from '../components/users/privaterecipes/add-privaterecipes'
import PrivateRecipeList from '../components/users/privaterecipes/privaterecipes'
import MealplanDashboard from '../components/users/mealplan/mealplan-dashboard'
//import AddMealplan from "../../components/user/mealplan/add-mealplan"
import UserSearch4 from '../components/users/mealplan/user-search4'
import GrocerylistDashboard from '../components/users/grocerylist/grocerylist-dashboard'
import AddLists from '../components/users/grocerylist/add-list'
import UserSearch5 from '../components/users/grocerylist/user-search5'
import MealplanList from '../components/users/mealplan/mealplanlist'
import UpdateTitle4 from '../components/users/grocerylist/update-title4'
//import AddDeals from "../components/user/deal/add-deal"
//import DealsDashboard from "../components/user/deal/deals-dashboard"
//import DealsPosts from "../components/user/deal/deals-posts"
import UserRecipeList from '../components/users/recipes/user-recipes-list'
import AnRecipeList2 from '../components/users/recipes/anrecipes2'
import RecipeList2 from '../components/users/recipes/recipes2'
import PrivateRecipeList2 from '../components/users/privaterecipes/privaterecipes2'
import MealplanList2 from '../components/users/mealplan/mealplanlist2'
//import Details from "../components/details"
import UserSearch3 from '../components/users/privaterecipes/user-search3'
//import TestPage from '../../components/test'
import AddMealplan from '../components/users/mealplan/add-mealplan'
import Instructions from '../components/users/instructions'
*/