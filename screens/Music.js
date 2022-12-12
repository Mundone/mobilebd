import React, {useEffect} from 'react';
import TrackListScreen from './TrackListScreen';
import TrackPlayer from 'react-native-track-player';
import {musiclibrary} from './data';
export default function Music() {
  const setup = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add(musiclibrary);
  };
  useEffect(() => {
    setup();
  }, []);
  return < TrackPlayerScreen />;}