import slugify from 'slugify';
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
  indent = 20,
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
      {section.items.map(item => {
        const sectionIsActive = isItemActive(location, item);
        return (
          <div
            key={item.id}
            css={{
              marginTop: 5,
              lineHeight: 1.4,
            }}>
            <SectionLink
              isActive={!activeItemId && sectionIsActive}
              item={item}
              directory={directory}
            />

            {sectionIsActive &&
              item.subitems.length &&
              item.subitems
                .map(subitem => {
                  return (
                    <div
                      key={subitem.id}
                      css={{marginLeft: indent * (subitem.depth - 1)}}>
                      <SectionLink
                        isActive={
                          isScrollSync
                            ? activeItemId === subitem.id
                            : isItemActive(location, subitem)
                        }
                        item={subitem}
                      />
                    </div>
                  );
                })}
          </div>
        );
      })}
    </div>
  </div>
);

export default Section;
