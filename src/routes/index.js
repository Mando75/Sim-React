import React from 'react'
import { connect } from 'redux-zero/react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './routes.css'

import AuthPortal from './AuthPortal'

const MTP = ({_authed}) => ({_authed});
function Routes(props) {
  return (
    <BrowserRouter>
      <div className="site-container">
        {props._authed ? (
          <Switch>
            <Route path="/" exact render={() => (<div className="temptemp">{lorem}</div>)} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={AuthPortal} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  )
}

export default connect(MTP)(Routes)


const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend semper nunc eget sodales. Pellentesque in hendrerit ipsum, eu egestas justo. Sed non justo vitae quam efficitur vestibulum. Ut at erat maximus, tristique urna nec, fringilla leo. Suspendisse a metus lobortis, euismod ipsum iaculis, luctus arcu. Phasellus tempus, lacus non luctus tempor, neque sem aliquam quam, non volutpat diam ipsum eu odio. Morbi rhoncus nisl eu lacinia eleifend. Nulla aliquam elit magna, id aliquet ante maximus dapibus.

Phasellus lobortis semper cursus. Vestibulum est ante, lobortis malesuada ornare finibus, pellentesque ac eros. Sed tempor justo eu tincidunt tristique. Integer feugiat porttitor finibus. Pellentesque vel dui sit amet massa maximus elementum. Pellentesque metus sapien, bibendum vitae ultricies eu, maximus porttitor nulla. Duis non justo id lectus commodo pharetra id ut ligula. Nullam id ante elementum, cursus elit ac, fringilla nisi. Pellentesque suscipit facilisis urna in tincidunt. Etiam ac ipsum imperdiet neque posuere vulputate ut id purus. Nullam sagittis aliquet ullamcorper. Proin rhoncus maximus mauris at venenatis. Praesent et leo leo. Curabitur efficitur dolor in quam ultrices, convallis efficitur enim viverra. Nam quam nibh, dapibus eget accumsan gravida, fermentum auctor enim.

Suspendisse et lectus eu nisi tempus elementum quis id lectus. Vestibulum cursus erat interdum elit dignissim lacinia. Nam at ex viverra, elementum sapien vel, lacinia orci. Donec vulputate leo sit amet sodales tincidunt. Maecenas metus velit, consequat eu lobortis vitae, malesuada at metus. Donec sagittis libero eget urna dapibus mattis. Nunc auctor velit quis arcu ultricies dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam ac vestibulum arcu. Phasellus id mollis ipsum. Proin venenatis posuere nunc eget sodales. Nam sed magna lacus. Ut consectetur orci dapibus, ullamcorper tellus sit amet, porta turpis. Aliquam in cursus lectus. Ut enim purus, fermentum placerat turpis dignissim, accumsan placerat nisl. Aliquam viverra tellus a metus volutpat dapibus. Nulla aliquet ultricies felis at egestas. Donec faucibus justo ut eleifend consectetur. Duis nec turpis velit. Integer facilisis suscipit orci id hendrerit. Suspendisse dolor diam, vulputate nec ligula in, aliquet rutrum diam. Integer accumsan rutrum quam nec faucibus. Suspendisse scelerisque suscipit massa ac condimentum. Cras lacinia accumsan purus, at aliquet ante pharetra ac.

Suspendisse potenti. Quisque eu nulla et nunc porta accumsan id ac elit. Aenean sed varius nisi. Cras sit amet leo sed felis condimentum vehicula. In commodo arcu purus, in consectetur erat hendrerit id. Fusce venenatis sed quam a ullamcorper. Nunc vitae felis id nisi iaculis sagittis vel id metus. Ut malesuada, urna a lacinia finibus, mi urna pharetra nisi, sed porta diam felis non magna.

Etiam hendrerit rutrum facilisis. Quisque molestie justo lacus, nec sollicitudin purus malesuada ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi facilisis massa dictum dictum dictum. Vivamus eget malesuada nunc. Sed dictum finibus est id convallis. Etiam sollicitudin augue at erat cursus dictum. Pellentesque porta imperdiet fringilla. Donec pharetra fermentum ex, vel dapibus elit rhoncus quis. Morbi vitae ex in dolor mollis fermentum id non massa.

Morbi viverra libero vitae enim tempus faucibus. Praesent ac sapien est. Sed finibus sapien metus, ac accumsan dui congue ac. Nunc dui velit, laoreet nec finibus id, viverra vel purus. Ut volutpat bibendum sapien, non fringilla mi feugiat a. Praesent vestibulum nulla lorem, sed tincidunt arcu tempus a. Praesent non dui eleifend, bibendum odio id, placerat lorem. Mauris auctor tincidunt sem, nec sagittis lacus gravida in.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque laoreet ex vitae massa efficitur eleifend. Aliquam ornare commodo risus, non rhoncus est condimentum id. Sed et auctor elit. Nulla id lacinia augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ultricies sem in risus vestibulum, bibendum dictum sem convallis. Praesent tempus efficitur ante. Nunc turpis dui, efficitur eu massa pulvinar, posuere mollis est.

Proin at feugiat quam, at euismod elit. Maecenas auctor eu sem vel lobortis. Aliquam nibh neque, tempus finibus vestibulum vel, venenatis in justo. Cras rhoncus ornare nunc, vitae sollicitudin quam tempor placerat. In volutpat eu nulla quis venenatis. Suspendisse tincidunt elementum nibh, nec iaculis sapien pharetra id. Quisque dictum ac odio in sollicitudin. Nunc tempus dolor ex. Cras eu mi odio. Nulla lacus augue, dignissim eget leo nec, malesuada commodo mi. Phasellus nisl sem, hendrerit sed semper quis, aliquam eget lectus.

Pellentesque aliquam euismod turpis, et sagittis libero commodo quis. In eu ante semper, porta arcu et, fringilla tellus. Nulla quis eros euismod, scelerisque odio sit amet, dapibus ante. Pellentesque non vulputate nisl. Morbi egestas porttitor massa, eget finibus turpis consequat luctus. Ut metus arcu, sagittis nec blandit id, lacinia id turpis. Phasellus eget felis in nulla aliquam iaculis.`