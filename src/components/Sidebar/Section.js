import React from 'react';
import {colors, media} from '../../theme';
import isItemActive from '../../utils/isItemActive';
import MetaTitle from '../MetaTitle';
import SectionLink from './SectionLink';

const Section = ({
  activeItemId,
  directory,
  isActive,
  isScrollSync,
  location,
  section,
}) => (
  <div>
    <a
      css={{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        marginTop: 10,
      }}
      href={`/${directory}/`}>
      <MetaTitle
        cssProps={{
          [media.greaterThan('small')]: {
            color: isActive ? colors.text : colors.subtle,

            ':hover': {
              color: colors.primary,
            },
          },
        }}>
        {section.title}
      </MetaTitle>
    </a>
    <div
      css={{
        marginBottom: 10,
        [media.greaterThan('small')]: {
          display: isActive ? 'block' : 'none',
        },
      }}>
      {section.items.map(item => (
        <div
          key={item.id}
          css={{
            marginTop: 5,
          }}>
          <SectionLink
            isActive={
              isScrollSync
                ? activeItemId === item.id
                : isItemActive(location, item)
            }
            item={item}
            directory={directory}
          />

          {item.subitems && (
            <div css={{marginLeft: 20}}>
              {item.subitems.map(subitem => (
                <div key={subitem.id}>
                  <SectionLink
                    isActive={
                      isScrollSync
                        ? activeItemId === subitem.id
                        : isItemActive(location, subitem)
                    }
                    item={subitem}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Section;
