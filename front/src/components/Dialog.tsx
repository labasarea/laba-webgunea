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
        <div>
          <Close title="Cerrar" onClick={onClose}>
            ✕
          </Close>
        </div>

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

  background-color: transparent;
  border: none;
  cursor: pointer;

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

  border: 1px solid ${colors.beltza};
  box-shadow: 0 5px 15px ${colors.beltza};

  ${media.tablet`
    width: 600px;
  `}

  &::backdrop {
    backdrop-filter: blur(4px);
    background-color: ${rgba(colors.beltza, 0.6)};
  }
`;
