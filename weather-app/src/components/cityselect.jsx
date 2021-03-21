import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Button, TextField, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.name,
});

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span:first-child": {
      marginRight: 10,
      fontSize: 18,
      minWidth: 25,
    },
  },
  middle: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "100%",
    gap: 40,
    clipPath: "polygon(75% 20%, 100% 50%, 100% 100%, 0px 100%, 0px 50%, 25% 20%)",
    backgroundColor: "lightgray",
  },
  Box_bottom: {
    position: "fixed",
    bottom: "0",
    height: "auto",
    width: "100%",
    clipPath: "polygon(35% 0%, 65% 0%, 75% 100%, 25% 100%)",
    // backgroundColor: "rgba(255,255,255,0.5)",
    backgroundColor: "transparent",
  },
  Autocomplete_root: {
    textAlign: "center",
    margin: "40px",
  },
  Autocomplete_paper: { margin: "10px 0" },
  Button_root: { fontSize: "1.5rem" },
});

function GetSortOrder(prop1, prop2) {
  return function (a, b) {
    if (a[prop1] + a[prop2] > b[prop1] + b[prop2]) {
      return 1;
    } else if (a[prop1] + a[prop2] < b[prop1] + b[prop2]) {
      return -1;
    }
    return 0;
  };
}

export default function CitySelect(props) {
  const classes = useStyles();

  const [city, setCity] = useState({});

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) {
      setOptions(props.cities.sort(GetSortOrder("country", "name")));
    }

    return () => {
      active = false;
    };
  }, [loading, props.cities]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    if (city !== null && city.name !== undefined)
      props.setCityName(city.name + ",," + city.country);
  }, [city, props]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={clsx(classes.middle, {
        [classes.Box_bottom]: props.isloaded,
      })}>
      {!props.isloaded && <Typography variant="h2">Choose your city!</Typography>}

      {!props.isloaded && props.geoIP.geoplugin_city !== undefined && (
        <Button
          classes={{
            root: classes.Button_root,
          }}
          onClick={() => {
            setCity({
              name: props.geoIP.geoplugin_city,
              country: props.geoIP.geoplugin_countryCode,
            });
          }}>
          Get location by IP
        </Button>
      )}

      <Autocomplete
        id="city-select"
        selectOnFocus
        classes={{
          option: classes.option,
          root: classes.Autocomplete_root,
          paper: classes.Autocomplete_paper,
        }}
        filterOptions={filterOptions}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        style={{
          backgroundColor: "rgba(255,255,255,.75)",
          padding: "0.5rem",
          borderRadius: "5px",
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={(_, newValue) => {
          setCity(newValue);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => `${option.name} (${option.country})`}
        options={options}
        loading={loading}
        renderOption={(option, { inputValue }) => {
          let parts = [];

          const name = option.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          const input = inputValue
            ? inputValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            : inputValue;
          const regex = new RegExp(input, "ig");

          if (input && name.search(regex) === 0) {
            parts = option.name
              .substring(0, inputValue.length)
              .split()
              .map((char) => {
                return {
                  text: char,
                  highlight: true,
                };
              });
            parts.push({
              text: option.name.substring(inputValue.length),
              highlight: false,
            });
          } else {
            parts.push({
              text: option.name,
              highlight: false,
            });
          }

          return (
            <Fragment>
              <span>{countryToFlag(option.country)}</span>
              {parts &&
                parts.map((part, index) => (
                  <span
                    key={index}
                    style={{ whiteSpace: "pre", fontWeight: part.highlight ? 700 : 400 }}>
                    {part.text}
                  </span>
                ))}
            </Fragment>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a city"
            variant="outlined"
            style={{ width: 300, backgroundColor: "rgba(255,255,255,.5)" }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}
