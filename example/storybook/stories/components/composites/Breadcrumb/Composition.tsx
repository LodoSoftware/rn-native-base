import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Box, Breadcrumb, HStack, Heading } from 'native-base';

import React from 'react';

export const Example = () => {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb Composition</Heading>
      <Breadcrumb spacing={2} _button={{ bg: 'transparent' }}>
        <Breadcrumb.Item>
          <Breadcrumb.Link>
            <HStack justifyContent="center" alignItems="center">
              <Breadcrumb.Icon
                as={<MaterialIcons name="home" />}
                mr={1}
                size="xs"
              />
              <Breadcrumb.Text _current={{ color: 'blue.500' }}>
                Home
              </Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            <HStack justifyContent="center" alignItems="center">
              <Breadcrumb.Icon
                fontWeight={'bold'}
                as={MaterialCommunityIcons}
                name="file-document"
                mr={1}
                size="xs"
              />
              <Breadcrumb.Text>Docs</Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link
            href="https://github.com/LodoSoftware/rn-native-base"
            isExternal
          >
            <HStack justifyContent="center" alignItems="center">
              <Breadcrumb.Icon
                as={<AntDesign name="github" />}
                mr={1}
                size="xs"
              />
              <Breadcrumb.Text>
                Github (This is currently active)
              </Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
};
