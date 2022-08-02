import React from "react";
import { create } from 'react-test-renderer';

import { Footer } from "../components/Footer";


const tree = create(Footer(false))

test('snapshot Home', ()=>{
    expect(tree).toMatchSnapshot()
})
