import { Box, Breadcrumb, Heading } from 'native-base';

import React from 'react';
export const Example = () => {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb with String Separator</Heading>
      <Breadcrumb separator={'-'}>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link>
            <Breadcrumb.Text _current={{ color: 'red.500' }}>
              Home (This is currently active)
            </Breadcrumb.Text>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/LodoSoftware/rn-native-base"
            isExternal
          >
            Github
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
};
