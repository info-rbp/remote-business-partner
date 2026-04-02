'use client';

import { Badge } from '@/components/ui/badge';
import { AccountState, getStateMetadata } from '@/lib/state';

interface StateBadgeProps {
  state: AccountState;
}

export const StateBadge = ({ state }: StateBadgeProps) => {
  const { label, variant } = getStateMetadata(state);
  return <Badge variant={variant}>{label}</Badge>;
};
