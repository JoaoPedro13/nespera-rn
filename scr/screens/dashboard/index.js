import React from 'react';
import {View, Text} from 'react-native';

import Layout from '../../components/layout';
import Header from '../../components/header';
import Dilema from '../../components/dilema';

const DashboardScreen = () => {
  return (
    <Layout>
      <Header />
      <Dilema />
    </Layout>
  );
};

export default DashboardScreen;
