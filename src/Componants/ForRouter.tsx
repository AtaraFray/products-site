import React from 'react';
import {NavigateOptions, Params, useLocation, useNavigate, useParams} from 'react-router-dom';
function ForRouter(Component: React.ComponentType<IForRouter & Object>) {
  function ComponentWithRouterProp(props: any) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const myprops ={
        location,
        navigate,
        params
    }
    return <Component {...props} id="1" {...myprops} />;
  }
  return ComponentWithRouterProp;
}
export default ForRouter;

export interface IForRouter  {
    location: Location,
    navigate: NavigateOptions,
    params: Params<string>,
}