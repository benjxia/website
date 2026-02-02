import { RouteObject } from "react-router";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import About from "./pages/about/About";
import Body from "./pages/about/Body";
import Resume from "./pages/about/Resume";
import Photos from "./pages/photos/Photos";
// import Posts from "./pages/posts/Posts";

interface Route {
    navBarText: string;
    routeObject: RouteObject;
}

const ROUTES: Route[] = [
  {
    navBarText: 'collection',
    routeObject: {
      path: '/collection',
      Component: Collection,
    }
  },
  // {
  //   navBarText: 'projects',
  //   routeObject: {
  //     path: '/projects'
  //     Component:
  //   }
  // },
  // {
  //   navBarText: 'posts',
  //   routeObject: {
  //     path: '/posts',
  //     Component: Posts
  //   },
  // },
  {
    navBarText: 'photos',
    routeObject: {
      path: '/photos',
      Component: Photos
    },
  },
  { // TODO: encapsulate the nested routes inside About page code.
    navBarText: 'about',
    routeObject: {
      path: '/about',
      Component: About,
      children: [
        {
          index: true,
          Component: Body
        },
        {
          path: 'résumé',
          Component: Resume
        }
      ]
    }
  }
]

const PATHS: RouteObject[] = [
  {
    path: '*',
    Component: Home,
  },
  ...ROUTES.map(x => x.routeObject)
];

export { PATHS, ROUTES };
