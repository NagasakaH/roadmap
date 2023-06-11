import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ReactComponent as Test} from './test.drawio.svg';
import chroma from 'chroma-js';

function addEventToRectangle(
  ref: React.RefObject<SVGSVGElement>,
  name: string,
  click: () => void
) {
  if (ref.current) {
    const nodes = Array.from(
      ref.current.querySelectorAll('[data-name="' + name + '"]')
    );
    for (const node of nodes) {
      const children = Array.from(node.children);
      const originalColors = new Array<string | null>();
      for (const child of children) {
        originalColors.push(child.getAttribute('fill'));
      }
      node.addEventListener('click', click);
      node.addEventListener('mouseover', () => {
        console.log('mouseover');
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const color = originalColors[i];
          if (child.tagName === 'rect' && color) {
            const newColor = chroma(color).darken().hex();
            child.setAttribute('fill', newColor);
          }
        }
      });
      node.addEventListener('mouseout', () => {
        console.log('mouseout');
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (child.tagName === 'rect') {
            const newColor = originalColors[i];
            child.setAttribute('fill', newColor ? newColor : '#000000');
          }
        }
      });
    }
  }
}

function App() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    console.log('add event listener');
    addEventToRectangle(ref, 'rect1', () => {});
    addEventToRectangle(ref, 'rect2', () => {});
    addEventToRectangle(ref, 'rect3', () => {});
  }, []);

  return (
    <div className="App">
      <div id="overlay"></div>
      <Test ref={ref} />
    </div>
  );
}

export default App;
