import React, { PropsWithChildren, useEffect, useRef } from 'react';

import styled from 'styled-components';
import { colors, font, media, size } from '../ui/theme';
import { rgba } from 'polished';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const Dialog: React.FC<PropsWithChildren<Props>> = ({
  open,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modalRef) {
      return;
    }

    if (open) {
      modalRef.current?.showModal();
      return;
    }

    modalRef.current?.close();
  }, [open, modalRef]);

  return (
    <DialogWrapper
      ref={modalRef}
      // @ts-expect-error dialog-en tipoetan arazo bat dagoela dirudi
      onClose={onClose}
      onCancel={onClose}
      onClick={({ target }) => {
        if (target !== modalRef.current) {
          return;
        }
        onClose();
      }}
    >
      <DialogContent>
        <Close title="Itxi" onClick={onClose}>
          ✕
        </Close>

        {children && <DialogBody>{children}</DialogBody>}
      </DialogContent>
    </DialogWrapper>
  );
};

const Close = styled.button`
  position: absolute;
  top: ${size.tiny}px;
  right: ${size.tiny}px;

  color: ${colors.zuria};
  ${font.base()};

  background-color: ${rgba(colors.beltza, 0.7)};
  border: none;
  cursor: pointer;
  z-index: 1;
  border-radius: 5px;

  &:hover {
    color: ${colors.urdina};
  }
`;

const DialogBody = styled.div``;

const DialogContent = styled.div`
  width: 100%;
  height: 100%;
`;

const DialogWrapper = styled.dialog`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 30px auto;
  padding: 0;
  width: 85vw;

  border: 1px solid ${colors.beltza};
  box-shadow: 0 5px 15px ${colors.beltza};

  ${media.tablet`
    width: 600px;
  `}

  &::backdrop {
    backdrop-filter: blur(4px);
    background-color: ${rgba(colors.beltza, 0.6)};
  }

  &[open] {
    animation: show 1s ease normal;
  }
  @keyframes show {
    from {
      transform: translateY(-110%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
