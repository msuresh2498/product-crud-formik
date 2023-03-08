import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div className='counter-button'>
      <IconButton color="primary" aria-label="add to shopping cart" onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="primary"> 👍
        </Badge>
      </IconButton>

      <IconButton color="error" aria-label="add to shopping cart" onClick={() => setDisLike(disLike + 1)}>
        <Badge badgeContent={disLike} color="error"> 👎
        </Badge>
      </IconButton>
    </div>
  );
}
