import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import React, { Component } from 'react'
import TodoApp from '../../todo-app'

export default function TodoList() {
  return (
    <Layout>
      <Head>
        <title>TODO</title>
      </Head>
      <h1>My TODO list:</h1>

      ReactDOM.render(
      <React.StrictMode>
        <TodoApp />
      </React.StrictMode>
      );

      <p>You also can create a fantastic TODO list just like this one by following <a href="https://www.youtube.com/watch?v=e_ZibOe77yo">this</a> tutorial: </p>
    </Layout>
  )
}
