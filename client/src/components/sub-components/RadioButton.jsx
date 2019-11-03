import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    paddingBottom: '10%',
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
})

// Inspired by greyprintjs
function StyledRadio(props) {
  const classes = useStyles()

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  )
}

export default function CustomizedRadios(props) {
  function handleClick(e) {
    const reviewminimum = Number(e.target.value)
    if (props.filterValues.sortRating !== reviewminimum) {
      props.setFilter({
        ...props.filterValues,
        sortRating: reviewminimum,
      })
      return
    }
    props.setFilter({
      ...props.filterValues,
      sortRating: null,
    })
  }

  return (
    <div class="space">
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <b className="label-title">review score</b>
        </FormLabel>
        <RadioGroup
          defaultValue="female"
          aria-label="gender"
          name="customized-radios"
        >
          <div>
            <FormControlLabel
              value="5"
              control={<StyledRadio />}
              label="5 and more"
              onClick={handleClick}
            />
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 0h-.2v99h.2C76.8 99 99 76.8 99 49.5S76.8 0 49.5 0z"></path>
                <path
                  fill="white"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <FormControlLabel
              value="4"
              control={<StyledRadio />}
              label="4 and more"
              onClick={handleClick}
            />
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 0h-.2v99h.2C76.8 99 99 76.8 99 49.5S76.8 0 49.5 0z"></path>
                <path
                  fill="white"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <FormControlLabel
              value="3"
              control={<StyledRadio />}
              label="3 and more"
              onClick={handleClick}
            />
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 0h-.2v99h.2C76.8 99 99 76.8 99 49.5S76.8 0 49.5 0z"></path>
                <path
                  fill="white"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <FormControlLabel
              value="2"
              control={<StyledRadio />}
              label="2 and more"
              onClick={handleClick}
            />
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 0h-.2v99h.2C76.8 99 99 76.8 99 49.5S76.8 0 49.5 0z"></path>
                <path
                  fill="white"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <FormControlLabel
              value="1"
              control={<StyledRadio />}
              label="1 and more"
              onClick={handleClick}
            />
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-blue icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class="icon-svg icon-svg--size-5 icon-svg--color-grey icon-svg--vertical-align-top"
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 0h-.2v99h.2C76.8 99 99 76.8 99 49.5S76.8 0 49.5 0z"></path>
                <path
                  fill="white"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <FormControlLabel
              value="0"
              control={<StyledRadio />}
              label="clear filter"
              onClick={handleClick}
            />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  )
}
