import React from "react"
import styled from "styled-components"
import { Container, Box, Grid, Col } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"
import { formatPath } from "utils"
import { PageWrapper, Main, Sidebar } from "components/Layout"
import { frontMatter as packages } from "../pages/packages/**/*.mdx"

const PackageInfoWrapper = styled(Box)`
  .grid {
    border-top: 1px solid ${({ theme }) => theme.colors.ui_500};
  }
`

function PackageInfo({ info: { source, title, install, package_name } }) {
  return (
    <PackageInfoWrapper bg="blue_100" borderRadius="0.25rem">
      <Heading as="h1" p="2rem">
        {title}
      </Heading>
      <Box
        as="img"
        px="2rem"
        pb="2rem"
        alt="npm (scoped)"
        src={`https://img.shields.io/npm/v/@rent_avail/${package_name}?color=%237c95b0&label=version&style=for-the-badge`}
      />
      <Grid p="2rem" className="grid">
        <Col gridColumn={["span 2"]}>Install</Col>
        <Col gridColumn={["span 10"]} as="code">
          {install}
        </Col>
        <Col gridColumn={["span 2"]}>Source</Col>
        <Col gridColumn={["span 10"]}>
          <Text
            as="a"
            color="ui_900"
            className="link"
            href={source}
            target="_blank"
          >
            Github
          </Text>
        </Col>
      </Grid>
    </PackageInfoWrapper>
  )
}

export default function ElementsLayout({ children: content, frontMatter }) {
  // console.log(packages)
  const orderedPackages = packages.sort((curr) => {
    const path = formatPath(curr.__resourcePath)
    return path === "packages" ? -1 : 0
  })
  const packageInfo = frontMatter.source
  return (
    <PageWrapper>
      <Sidebar pages={orderedPackages} />
      <Main>
        <Container my="4rem">
          {packageInfo && <PackageInfo info={frontMatter} />}
          {content}
        </Container>
      </Main>
    </PageWrapper>
  )
}
