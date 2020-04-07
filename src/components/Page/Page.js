import React from 'react'

function Page(props) {
    const { layout: Layout, component: Component } = props
    return (
        <Layout>
            <Component />
        </Layout>
    )
}

export default Page