import React from 'react'
import {Link} from 'react-router-dom';
import DarkMode from "./DarkMode";

export default function Navbar() {

    return (
      <div>
          <nav className='navigation'>
              <li>
                  <DarkMode/>
              </li>
              <li>
                   <Link to="/">Home</Link>
              </li>

              <li>
                   <Link to="/bears">Bears</Link>
              </li>

              <li>
                  <Link to="/people">People</Link>
              </li>

              <li>
                  <Link to="/person">Person</Link>
              </li>

              <li>
                  <Link to="/pokemons">Pokemons</Link>
              </li>

              <li>
                  <Link to="/profile">Profile</Link>
              </li>
          </nav>
      </div>
    )
}