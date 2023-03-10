import React from "react"
import { Link } from "gatsby"
//import { getCurrentUser, updateUserInfo } from "../services/auth"

const Instructions = () => {
  return (
    <div className="App">
      <Link className="Link" to="/user/authorized/user-dashboard">
        <h4>User Home</h4>
      </Link>
      <br />
      <h2>Instructions</h2>
      <hr />
      <p>
        Note 1: The recipes are divided into five sections: Title, Type,
        Category, Source, Content, and User.Name. Each recipe type will have a
        menu with the following: AddRecipe, Posts, Lists, and search options.
        <br />
        <br />
        Note 2: Go to the add recipe page and type in the Title, Type, Category,
        Content, and Source. Click submit and the recipe will be stored in the
        database. There are many options in the content section like adding an
        image and a preview page. Please email, therecipestash@protonmail.com,
        about any questions concerning the content options or if the user needs
        to update a certain recipe.
        <br />
        <br />
        Note 3: The Lists page will show only the title, category, and user for
        quick viewing. The Posts page will show all of the fields for a more
        detailed view. The Search option page will allow the user to search by
        title, category, and content.
        <br />
        <br />
        Note 4: The Deals page will provide weekly restuarant/fast food deals as
        well as cooking appliances deals.
        <br />
        <br />
        Note 5: If the user needs help with a food or recipe questions, please
        email therecipestash@protonmail.com and we will respond accordingly to
        the question.
        <br />
        <br />
        Note 6: Periodically a random user will be awarded a food gift card. A
        group email will be sent out periodically naming the winner.
        <br />
        <br />
        Note 7: A validation failed message means that the user's identity token
        has expired and the user needs to sign in again.
        <br />
        <br />
        Note 8: Offensive language is prohibited and will be deleted with
        possible expulsion of the user as well.
        <br />
        <br />
        Note 9: Users who have signed up to this site will also have access to:
        <br />{" "}
        <a href="https://therecipestash.netlify.app" className="Link">
          https://therecipestash.netlify.app
        </a>{" "}
        <br />
        <a href="https://recipestash.netlify.app" className="Link">
          https://recipestash.netlify.app
        </a>{" "}
        <br />
        https://therecipestash.netlify.app is a curated list of recipes site
        <br />
        https://recipestash.netlify.app is another recipe sharing site
        <br />
        <br />
        Note 10: If the user adds a recipe/recipe review, but the recipe/recipe
        review does not show up in the list, the user should refresh the page
        and the recipe will then appear. This applies with deleting a recipe as
        well, press the delete button and refresh the page if the item is not
        automatically deleted.
        <br />
        <br />
        Note 11: If a network error message shows up on the screen. The user
        should refresh the page and the error should go away.
        <br />
        <br />
        Note 12: To open a link that is in a recipe just right click and click
        'Go to https://...'. However, this will not work on a mobile device. For
        deals, the source link will open correctly.
        <br />
        <br />
      </p>
    </div>
  )
}

export default Instructions
