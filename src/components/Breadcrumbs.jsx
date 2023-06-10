import { Text } from "@chakra-ui/react"
import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`

      return (
        <Text fontSize='1.3em' color='gray.600' display='inline' className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb.toUpperCase()} | </Link>
        </Text>
      )
    })

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}