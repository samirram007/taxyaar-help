import { TanStackDevtools } from '@tanstack/react-devtools';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import TanStackQueryDevtools from './devtools';
export default function LayoutAddition() {
  return (<>
    <TanStackDevtools config={{
      position: 'bottom-right',
    }}
      plugins={[
        {
          name: 'Tanstack Router',
          render: <TanStackRouterDevtoolsPanel />,
        },
        TanStackQueryDevtools,
      ]} />
    {/* <ReactQueryDevtools buttonPosition="bottom-right" /> */}

  </>)
}
