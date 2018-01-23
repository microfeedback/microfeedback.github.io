import React from 'react';
import {colors, media} from '../../theme';
import isItemActive from '../../utils/isItemActive';
import MetaTitle from '../MetaTitle';
import SectionLink from './SectionLink';

const SubItems = ({items, isScrollSync, activeItemId, indent = 20, onLinkClick}) => {
  return (
    <div css={{lineHeight: 1.3}}>
      {items.map(subitem => (
        <div key={subitem.id}>
          <div css={{marginLeft: indent * (subitem.depth - 1)}}>
            <SectionLink
              onClick={onLinkClick}
              isActive={
                isScrollSync
                  ? activeItemId === subitem.id
                  : isItemActive(location, subitem)
              }
              item={subitem}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Section = ({
  activeItemId,
  directory,
  isActive,
  isScrollSync,
  location,
  section,
  onLinkClick,
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
              lineHeight: 1.6,
            }}>
            <SectionLink
              isActive={!activeItemId && sectionIsActive}
              isSubItemActive={sectionIsActive && activeItemId}
              item={item}
              directory={directory}
            />

            {sectionIsActive &&
              item.subitems.length && (
                <SubItems
                  activeItemId={activeItemId}
                  indent={indent}
                  isScrollSync={isScrollSync}
                  onLinkClick={onLinkClick}
                  items={item.subitems}
                />
              )}
          </div>
        );
      })}
    </div>
  </div>
);

export default Section;
