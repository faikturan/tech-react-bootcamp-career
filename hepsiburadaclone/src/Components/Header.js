import React, { useState } from 'react'

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const [searchFocus, setSearchFocus] = useState(false)
    const [value, setValue] = useState("");
    const cart = useSelector((state) => state.cart);
  return (
    <div>Header</div>
  )
}

export default Header