/* eslint-disable react/prop-types */
'use strict';
import styles from './Card.module.css';

export default function Card(props) {
  const classes = `${styles.card} ${props.className || ''}`;
  // const classesArray = [styles.card, props.className].filter(Boolean),
  //   classes = classesArray.join(' ');

  return <section className={classes}>{props.children}</section>;
}
// *Children, is a reserved name and the value of this special [children prop] will always be the  [content between the opening and closing tags of your custom component ].
