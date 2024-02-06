import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const DisqusComments = ({ shortname, url, identifier, title }) => {
  const disqusConfig = {
    shortname,
    url,
    identifier,
    title,
  };

  return <DiscussionEmbed config={disqusConfig} />;
};

export default DisqusComments;