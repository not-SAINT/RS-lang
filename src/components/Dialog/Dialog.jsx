import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Grid,
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

import { WORDS_END } from '../../constants/modal-messages';

import style from './Dialog.module.scss';

const CustomizedDialogs = ({ isOpen, type, title, message, callBack }) => {
  const [open, setOpen] = React.useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    callBack();
  };

  const ModalWindowTitle = classNames({
    [style.ModalWindow__title]: type.toLowerCase() === 'info',
    [style['ModalWindow__title-error']]: type.toLowerCase() === 'error',
  });

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle className={ModalWindowTitle} id="customized-dialog-title" onClose={handleClose}>
        {title}
      </DialogTitle>
      <DialogContent className={style.ModalWindow__content} dividers>
        <Typography gutterBottom>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Grid className={style['ModalWindow__container-close']}>
          <Button
            className={style.ModalWindow__close}
            autoFocus
            onClick={handleClose}
            color="primary"
          >
            Закрыть
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

CustomizedDialogs.defaultProps = {
  callBack: () => {},
  title: WORDS_END.tittle,
};

CustomizedDialogs.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  callBack: PropTypes.func,
};

export default CustomizedDialogs;
