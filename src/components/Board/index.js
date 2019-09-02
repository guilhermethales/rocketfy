import React, { useState } from 'react';

import { loadLists } from '../../services/api';
import List from '../List';
import { Container } from './styles';

const lists = loadLists();

export default function () {
  return (
    <Container>
      { lists.map(list => (
        <List key={list.title} data={list} />
      )) }
    </Container>
  )
}