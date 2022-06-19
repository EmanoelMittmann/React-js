import React from 'react';

import { useContext } from 'react';
import { SomeContext } from '../Components/HookUseContext';

const About = () => {
    const { contextValue } = useContext(SomeContext)
    return (
    <div>
        <h1>about</h1>
        <p>valor do context: {contextValue}</p>
    </div>
  )
}

export default About